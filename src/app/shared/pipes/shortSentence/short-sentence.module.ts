import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortSentencePipe } from './short-sentence.pipe';

@NgModule({
    declarations: [ShortSentencePipe],
    imports: [
        CommonModule
    ],
    exports: [ShortSentencePipe]
})
export class ShortSentenceModule {}
