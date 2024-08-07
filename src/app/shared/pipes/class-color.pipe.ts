import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'classColor',
  standalone: true
})
export class ClassColorPipe implements PipeTransform {
  transform(profession: string): string {
  
    let color: string;  
    switch (profession) {
      case 'Guerrier':
        color = 'orange';
        break;
      case 'Moine':
        color = 'blue';
        break;
      case 'Necromant':
        color = 'light-green';
        break;
      case 'Ranger':
        color = 'dark-green';
        break;
      case 'Envouteur':
        color = 'pink';
        break;
      case 'Assassin':
        color = 'purple';
        break;
      case 'Dervish':
        color = 'grey';
        break;
      case 'Parangon':
        color = 'yellow';
        break;
      case 'Ritualist':
        color = 'cyan';
        break;
      case 'Elementaliste':
        color = 'red';
        break;
      default:
        color = 'grey';
        break;
    }
  
    return 'chip ' + color;
  
  }
}
