<?php
/**
 * Routes configuration
 *
 * In this file, you set up routes to your controllers and their actions.
 * Routes are very important mechanism that allows you to freely connect
 * different URLs to chosen controllers and their actions (functions).
 *
 * CakePHP(tm) : Rapid Development Framework (https://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 * @link          https://cakephp.org CakePHP(tm) Project
 * @license       https://opensource.org/licenses/mit-license.php MIT License
 */

use Cake\Core\Plugin;
use Cake\Routing\RouteBuilder;
use Cake\Routing\Router;
use Cake\Routing\Route\DashedRoute;

/**
 * The default class to use for all routes
 *
 * The following route classes are supplied with CakePHP and are appropriate
 * to set as the default:
 *
 * - Route
 * - InflectedRoute
 * - DashedRoute
 *
 * If no call is made to `Router::defaultRouteClass()`, the class used is
 * `Route` (`Cake\Routing\Route\Route`)
 *
 * Note that `Route` does not do any inflections on URLs which will result in
 * inconsistently cased URLs when used with `:plugin`, `:controller` and
 * `:action` markers.
 *
 */
Router::defaultRouteClass(DashedRoute::class);

Router::scope('/', function (RouteBuilder $routes) {

    $routes->connect(
        '/:path',
        ['controller' => 'Pages', 'action' => 'display', 'home'],
        ['path' => '.*']
    );

    $routes->resources('Activities', ['map' => ['filter' => [
        'action' => 'filter',
        'method' => 'GET'
    ]]]);

    $routes->scope('/api/', function($routes) {
        $list = ['map' => ['list' => [
            'action' => 'list',
            'method' => 'POST',
            'path' => '/list'
        ]]];

        $routes->resources('Activities', $list);
        $routes->resources('Activities', ['map' => ['getByProviders' => [
            'action' => 'getByProviders',
            'method' => 'POST',
            'path' => '/getByProviders'
        ]]]);

        $routes->resources('Addresses', $list);
        $routes->resources('Categories', $list);
        $routes->resources('Configurations', $list);
        $routes->resources('Organisations', $list);
        $routes->resources('Suburbs',$list);
        $routes->resources('Tags', $list);
        $routes->resources('TargetGroups', $list);
        $routes->resources('Schedules', $list);
        $routes->resources('Users', $list);
        $routes->resources('Users', ['map' => ['login' => [
            'action' => 'login',
            'method' => 'POST',
            'path' => '/login'
        ]]]);

        $routes->resources('Providers', $list);
        $routes->resources('Providers', ['map' => ['getByOrganisation' => [
            'action' => 'getByOrganisation',
            'method' => 'POST',
            'path' => '/getByOrganisation'
        ]]]);
        $routes->resources('Providers', ['map' => ['getByUser' => [
            'action' => 'getByUser',
            'method' => 'POST',
            'path' => '/getByUser'
        ]]]);
    });
});

/**
 * Load all plugin routes. See the Plugin documentation on
 * how to customize the loading of plugin routes.
 */
Plugin::routes();
