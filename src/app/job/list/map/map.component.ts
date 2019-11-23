import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MapMarker, MapInfoWindow } from '@angular/google-maps';
import { Observable } from 'rxjs';
import { UiQuery } from '../../../ui/+state/ui.query';

interface Marker {
  position: google.maps.LatLngLiteral;
  options: google.maps.MarkerOptions;
  title: string;
  label: google.maps.MarkerLabel;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent implements OnInit {
  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;
  isMobile$: Observable<boolean>;

  markers: Marker[] = [];
  center: google.maps.LatLngLiteral;
  mapOptions: google.maps.MapOptions = {
    mapTypeId: google.maps.MapTypeId.SATELLITE
  };
  constructor(private ui: UiQuery) { }

  ngOnInit() {
    this.isMobile$ = this.ui.selectSize('mobile');
    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }

  openInfo(marker: MapMarker, content) {
    this.infoWindow.open(marker);
  }

  select(event: google.maps.MouseEvent) {
    this.markers.push({
      position: event.latLng.toJSON(),
      label: {
        color: 'red',
        text: 'Marker label ' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
      options: {
        animation: google.maps.Animation.BOUNCE,
      },
    });
  }
}
