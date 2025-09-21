import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PwaInstallService {
  private deferredPrompt: any = null;
  public isInstallable = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('beforeinstallprompt', (e) => {
        console.log('PWA install prompt available');
        e.preventDefault();
        this.deferredPrompt = e;
        this.isInstallable = true;
      });

      window.addEventListener('appinstalled', () => {
        console.log('PWA was installed');
        this.isInstallable = false;
        this.deferredPrompt = null;
      });
    }
  }

  async installPwa() {
    if (!this.deferredPrompt) {
      console.log('No install prompt available');
      return false;
    }

    this.deferredPrompt.prompt();
    const { outcome } = await this.deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
      this.deferredPrompt = null;
      this.isInstallable = false;
      return true;
    } else {
      console.log('User dismissed the install prompt');
      return false;
    }
  }

  canInstall(): boolean {
    return this.isInstallable && this.deferredPrompt !== null;
  }
}
