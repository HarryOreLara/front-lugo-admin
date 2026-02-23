import { Directive, Input, OnInit } from '@angular/core';
import { Channel } from '@enums/channel.enum';
import { Tag } from 'primeng/tag';

@Directive({
  selector: '[tagChannel]',
})
export class TagChannelDirective implements OnInit {
  @Input('tagChannel') channel!: Channel;

  constructor(private pTag: Tag) {}

  ngOnInit() {
    const config = this.getTagConfig(this.channel) ;
    this.pTag.value = config.value;
    this.pTag.severity = config.severity;
  }

  private getTagConfig(channel: Channel) {
    switch (channel) {
      case Channel.WEB:
        return { value: 'Web', severity: 'success' };
      case Channel.MOBILE:
        return { value: 'Movil', severity: 'warning' };
      case Channel.PHYSICAL:
        return { value: 'Tienda fisica', severity: 'info' };
      default:
        return { value: 'Desconocido', severity: 'danger' };
    }
  }
}
