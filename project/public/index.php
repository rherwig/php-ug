<?php

require_once __DIR__ . '/../vendor/autoload.php';

use Hrwg\PhpUG\Core\V8Renderer;

$modulePath = __DIR__ . '/../node_modules';
$clientBundleUri = '/assets/client.bundle.js';
$serverBundlePath = __DIR__ . '/assets/server.bundle.js';

$markup = '';

try {
    $renderer = new V8Renderer($modulePath);
    $markup = $renderer->render($serverBundlePath);
} catch (Exception $exception) {
    var_dump($exception);
}
?>

<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PHP UG</title>
</head>
<body>

<?php echo $markup ?>
<script src="/assets/client.bundle.js"></script>

</body>
</html>
