import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { BrowserModule } from '@angular/platform-browser';

import { UIRouterUpgradeModule, NgHybridStateDeclaration } from '@uirouter/angular-hybrid';

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule
    ]
})
export class AngularModule {
    constructor(private upgrade: UpgradeModule) {
    }

    ngDoBootstrap(): void {
        this.upgrade.bootstrap(document.documentElement, ['app'], {strictDi: true});
    }
}