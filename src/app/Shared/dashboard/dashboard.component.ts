import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  ChangeDetectorRef,
  OnInit,
} from '@angular/core';
import { Subscription, filter } from 'rxjs';
import {
  RouterOutlet,
  RouterModule,
  Router,
  NavigationEnd,
  Event as NavigationEvent,
} from '@angular/router';
import { SharedDataService } from '../../services/shared-data.service';
import { CommonModule } from '@angular/common';
import { CurrentYearPipe } from '../../pipes/current-year.pipe';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [RouterOutlet, RouterModule, CurrentYearPipe],
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('iconNavbarSidenav') iconNavbarSidenav!: ElementRef;
  @ViewChild('iconSidenav') iconSidenav!: ElementRef;
  @ViewChild('sidenavmain') sidenav!: ElementRef;
  @ViewChild('dash') dash!: ElementRef;
  className = 'g-sidenav-pinned';

  title = '';
  titleSubscription: Subscription;

  iconPath: string = '';
  CurrentYearPipe: number = new Date().getFullYear();

  constructor(
    private router: Router,
    private sharedDataService: SharedDataService,
    private cdr: ChangeDetectorRef
  ) {
    this.titleSubscription = this.sharedDataService.currentTitle.subscribe(
      (title) => {
        Promise.resolve().then(() => {
          this.title = title;
          this.cdr.detectChanges();
        });
      }
    );
  }

  ngOnInit() {
    this.updateIconPath(this.router.url);

    this.router.events
      .pipe(
        filter(
          (event: NavigationEvent): event is NavigationEnd =>
            event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        this.updateIconPath(event.urlAfterRedirects);
      });
  }

  updateIconPath(url: string) {
    const urlSegments = url.split('/');

    if (
      url.includes('/extraordinarytests') ||
      url.includes('/intersemestertests')
    ) {
      this.iconPath = 'assets/Common/Examen.svg';
    } else if (url.includes('/preenrollment')) {
      this.iconPath = 'assets/Common/Preinscripciones/Documento.svg';
    } else if (
      urlSegments.includes('schoolperiods') &&
      urlSegments.length === 3
    ) {
      this.iconPath = 'assets/Common/Periodo.svg';
    } else if (
      urlSegments.includes('schoolperiods') &&
      urlSegments.length > 3 &&
      !urlSegments.includes('qualifications')
    ) {
      this.iconPath = 'assets/Common/CalendarioHora.svg';
    } else if (
      urlSegments.includes('schoolperiods') &&
      urlSegments.includes('qualifications') &&
      urlSegments.length > 4
    ) {
      this.iconPath = 'assets/Common/Calificaciones.svg';
    } else {
      this.iconPath = ''; //
    }
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();

    this.iconNavbarSidenav.nativeElement.addEventListener('click', () =>
      this.toggleSidenav()
    );
    this.iconSidenav.nativeElement.addEventListener('click', () =>
      this.toggleSidenav()
    );
  }

  ngOnDestroy() {
    this.titleSubscription.unsubscribe();
  }

  toggleSidenav(): void {
    if (this.dash.nativeElement.classList.contains(this.className)) {
      this.dash.nativeElement.classList.remove(this.className);
      setTimeout(() => {
        this.sidenav.nativeElement.classList.remove('bg-white');
      }, 100);
      this.sidenav.nativeElement.classList.remove('bg-transparent');
    } else {
      this.dash.nativeElement.classList.add(this.className);
      this.sidenav.nativeElement.classList.add('bg-white');
      this.sidenav.nativeElement.classList.remove('bg-transparent');
      this.iconSidenav.nativeElement.classList.remove('d-none');
    }
  }
}
