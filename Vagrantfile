# -*- mode: ruby -*-
# vi: set ft=ruby :

VM_NAME = "php-ug"
DOMAIN = "phpug.test"
IP_ADDRESS = "10.10.20.210"

Vagrant.require_version ">= 2.2.0"

Vagrant.configure("2") do |config|
  config.vm.box = "bento/ubuntu-18.04"
  config.vm.hostname = DOMAIN
  config.vm.network "private_network", ip: IP_ADDRESS

  config.ssh.forward_agent = true

  config.vagrant.plugins = [
    "vagrant-hostsupdater"
  ]

  config.vm.synced_folder "project/", "/var/www/html"

  config.vm.provider "virtualbox" do |vb|
    vb.name = VM_NAME
    vb.gui = false
    vb.memory = "2048"
    vb.customize ["modifyvm", :id, "--audio", "none"]
  end

  config.vm.provision "ansible_local" do |ansible|
    ansible.compatibility_mode = "2.0"
    ansible.inventory_path = "ansible/hosts.ini"
    ansible.playbook = "ansible/site.yml"
    ansible.limit = "all"
  end
end
