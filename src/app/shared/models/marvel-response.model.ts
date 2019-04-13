import { MarvelList } from './marvel-list.model';

export abstract class MarvelResponse<T> {
    public code: number;
    public status: string;
    public attributionHTML: string;
    public data: MarvelList<T>;
}
