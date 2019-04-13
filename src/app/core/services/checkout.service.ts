import { Injectable, EventEmitter } from '@angular/core';
import { Comic } from 'src/app/shared/models/comic.model';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private comics: {};
  private storageName: string = 'cart';
  private countCar: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  private getStorage(): any[] {
    let comics = JSON.parse(localStorage.getItem(this.storageName));
    if (comics === null || comics === undefined) {
      comics = {};
    }
    return comics;
  }

  private clearStorage(): void {
    localStorage.removeItem(this.storageName);
  }

  public add(comic: Comic): void {
    this.comics = this.getStorage();
    this.comics[comic.id] = { comic: comic, count: 1 };
    localStorage.setItem(this.storageName, JSON.stringify(this.comics));
    this.setCount();
  }

  public changeCount(id: number, count: number): void {
    this.comics = this.getStorage();
    console.log(count);
    if (count == 0) {
      delete this.comics[id];
    } else if (this.comics[id]) {
      this.comics[id].count = count;
    }
    localStorage.setItem(this.storageName, JSON.stringify(this.comics));
    this.setCount();
  }

  public remove(id: number): void {
    this.comics = this.getStorage();
    if (this.comics[id]) {
      delete this.comics[id];
    }
    localStorage.setItem(this.storageName, JSON.stringify(this.comics));
    this.setCount();
  }

  public countEventBus(): EventEmitter<number> {
    return this.countCar;
  }

  public getCount(): number {
    this.comics = this.getStorage();
    return Object.keys(this.comics).length;
  }

  private setCount(): void {
    this.countCar.emit(this.getCount());
  }

  isInTheCart(id: number): boolean {
    const comics = this.getStorage();
    return comics[id] !== undefined && comics[id] !== null;
  }

  getCart(): any {
    const comics = this.getStorage();
    return comics;
  }

  closeOrder() {
    this.clearStorage();
    this.setCount();
  }
}
