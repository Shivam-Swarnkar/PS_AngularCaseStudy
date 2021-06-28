import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {
  productUrl,
  productImagesUrl,
  imageAuthorizationKey,
} from 'src/environments/environment';

@Injectable()
export class ECommerceService {
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: imageAuthorizationKey,
    }),
  };

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(productUrl).pipe(
      map((productResponse) => {
        return productResponse;
      })
    );
  }

  getPhotos() {
    return this.http.get(productImagesUrl, this.httpOptions).pipe(
      map((imageResponse) => {
        return imageResponse;
      })
    );
  }
}
