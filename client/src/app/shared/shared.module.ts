import { NgModule } from '@angular/core';
import { SafeUrlPipe } from './safe-url.pipe';
import { SushiPipe } from './sushi.pipe';

@NgModule({
  declarations: [SafeUrlPipe, SushiPipe],
  exports: [SafeUrlPipe],
})
export class SharedModule {}
