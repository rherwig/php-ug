<?php

declare(strict_types=1);

namespace Hrwg\PhpUG\Core;

use V8Js;

class V8Renderer
{
    /**
     * Path to the server bundle js file.
     *
     * @var string $serverBundlePath
     */
    protected $serverBundlePath;

    /**
     * Path to the node_modules directory that contains the vue-server-renderer.
     *
     * @var string $nodeModulesPath
     */
    protected $nodeModulesPath;

    /**
     * @var V8Js $v8
     */
    protected $v8;

    /**
     * V8Renderer constructor.
     *
     * @param string $nodeModulesPath
     */
    public function __construct(string $nodeModulesPath)
    {
        $this->v8 = new V8Js();
        $this->nodeModulesPath = $nodeModulesPath;
    }

    /**
     * Renders a VueJS bundle.
     *
     * @param string $serverBundlePath
     * @return false|string
     */
    public function render(string $serverBundlePath)
    {
        $renderer = file_get_contents(
            $this->nodeModulesPath . '/vue-server-renderer/basic.js'
        );
        $serverBundlePath = file_get_contents($serverBundlePath);

        $bundle = [
            'var process = { env: { VUE_ENV: "server", NODE_ENV: "production" } };',
            'this.global = { process: process };',
            $renderer,
            $serverBundlePath,
        ];

        $js = implode(';', $bundle);

        ob_start();
        $this->v8->executeString($js);
        return ob_get_clean();
    }
}
