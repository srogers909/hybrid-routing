import 'zone.js';
import { NgZone } from '@angular/core';

////////////// HYBRID BOOTSTRAP ///////////////
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { UIRouter, UrlService } from '@uirouter/core';
import { visualizer } from '@uirouter/visualizer';

import { SampleAppModuleAngular } from './angularModule';
import { sampleAppModuleAngularJS } from "./angularJSModule";

// Using AngularJS config block, call `deferIntercept()`.
// This tells UI-Router to delay the initial URL sync (until all bootstrapping is complete)
sampleAppModuleAngularJS.config([ '$urlServiceProvider', ($urlService: UrlService) => $urlService.deferIntercept() ]);

// Manually bootstrap the Angular app
platformBrowserDynamic()
    .bootstrapModule(SampleAppModuleAngular)
    .then(platformRef => {
        // Initialize the Angular Module
        // get() the UIRouter instance from DI to initialize the router
        const urlService: UrlService = platformRef.injector.get(UIRouter).urlService;

        // Instruct UIRouter to listen to URL changes
        function startUIRouter(): void {
            urlService.listen();
            urlService.sync();
        }

        platformRef.injector.get<NgZone>(NgZone).run(startUIRouter);
    });

// Show ui-router-visualizer
sampleAppModuleAngularJS.run(['$uiRouter', ($uiRouter) => visualizer($uiRouter) ]);