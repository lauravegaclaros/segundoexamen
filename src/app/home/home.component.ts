import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  frameworkElegido = 'Bootstrap 5';
  notificationSupported = false;
  notificationEnabled = false;
  notificationStatus = '';

  ngOnInit() {
    this.notificationSupported = 'Notification' in window;
    this.updateNotificationStatus();
  }

  async requestNotificationPermission() {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission();
      this.updateNotificationStatus();
    }
  }

  showTestNotification() {
    if (Notification.permission === 'granted') {
      new Notification('¡Notificación de prueba!', {
        body: 'Esta es una notificación local desde tu PWA',
        icon: '/assets/icons/icon-192x192.png',
        tag: 'test-notification'
      });
    }
  }

  private updateNotificationStatus() {
    if (!this.notificationSupported) {
      this.notificationStatus = 'Las notificaciones no son compatibles con este navegador';
      return;
    }

    switch (Notification.permission) {
      case 'granted':
        this.notificationEnabled = true;
        this.notificationStatus = '✅ Notificaciones permitidas - ¡Puedes probar ahora!';
        break;
      case 'denied':
        this.notificationEnabled = false;
        this.notificationStatus = '❌ Notificaciones denegadas - Habilítalas en configuración del navegador';
        break;
      default:
        this.notificationEnabled = false;
        this.notificationStatus = '🔔 Presiona "Permitir Notificaciones" para habilitar';
    }
  }
}
