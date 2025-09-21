import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ui',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent {
  cards = [
    { 
      title: 'Desarrollo Web',
      content: 'Aplicaciones modernas con Angular, React y Vue.js',
      category: 'Frontend',
      icon: 'laptop-code'
    },
    { 
      title: 'PWA',
      content: 'Progressive Web Apps que funcionan offline y se comportan como apps nativas',
      category: 'Mobile',
      icon: 'mobile-alt'
    },
    { 
      title: 'Responsive Design',
      content: 'Interfaces que se adaptan perfectamente a cualquier dispositivo',
      category: 'Design',
      icon: 'tablet-alt'
    },
    { 
      title: 'Performance',
      content: 'Optimización y mejores prácticas para aplicaciones rápidas',
      category: 'Backend',
      icon: 'tachometer-alt'
    },
    { 
      title: 'Accesibilidad',
      content: 'Desarrollo inclusivo siguiendo estándares WCAG',
      category: 'UX',
      icon: 'universal-access'
    },
    { 
      title: 'Testing',
      content: 'Pruebas unitarias e integración para código confiable',
      category: 'Quality',
      icon: 'flask'
    }
  ];
}
