import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Product } from '@shared/models/product.model';
import { SafeUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SanitizeService {
  constructor(private sanitizer: DomSanitizer) {}

  sanitizeURLs(products: Product[]) {
    return products.map((product) => {
      const sanitizedImgs = product.images.map((imgURL) =>
        this.sanitizer.bypassSecurityTrustUrl(imgURL),
      ) as string[];
      console.log(product.images[0]);
      console.log(sanitizedImgs[0]);
      return { ...product, images: sanitizedImgs };
    });
  }

  fixFormat(products: Product[]): Product[] {
    products = products.map((product) => {
      const fixedImgs = product.images.map((imgURL) => {
        if (imgURL.startsWith('["')) {
          imgURL = imgURL.substring(2, imgURL.length);
        }
        if (imgURL.endsWith('"]')) {
          imgURL = imgURL.substring(0, imgURL.length - 2);
        }
        return imgURL;
      });
      return { ...product, images: fixedImgs };
    });
    return products;
  }

  log(products: Product[]): Product[] {
    for (let product of products) {
      console.log(product.images[0]);
    }
    return products;
  }
}
