import { NgModule } from '@angular/core';
import { GraficasdonasComponent } from './graficasdonas/graficasdonas.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
    declarations: [
        GraficasdonasComponent
    ],
    exports: [
        GraficasdonasComponent
    ],
    imports: [
        ChartsModule
    ]
})

export class ComponentsModule{ }