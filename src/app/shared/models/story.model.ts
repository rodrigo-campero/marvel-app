import { Thumbnail } from './thumbnail.model';

export class Story {
    id: number;
    title: string;
    description: string;
    type: string;
    thumbnail?: Thumbnail;
}
