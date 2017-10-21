import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { SampleDirective } from './sample.directive';
import { SamplePipe } from './sample.pipe';
import { SampleService } from './sample.service';
import { ListComponent } from './list/list.component';

export * from './sample.component';
export * from './sample.directive';
export * from './sample.pipe';
export * from './sample.service';
export * from './list/list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SampleComponent,
    SampleDirective,
    SamplePipe,
    ListComponent
  ],
  exports: [
    SampleComponent,
    SampleDirective,
    SamplePipe,
    ListComponent
  ]
})
export class SampleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SampleModule,
      providers: [SampleService]
    };
  }
}
