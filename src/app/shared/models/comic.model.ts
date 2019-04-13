import { Thumbnail } from './thumbnail.model';
import { Character } from './character.model';
import { Creator } from './creator.model';
import { Story } from './story.model';
import { Price } from './price.model';

export class Comic {
    public id: number;
    public name: string;
    public title: string;
    public description: string;
    public thumbnail: Thumbnail;
    prices: Price[];
    public characters: Character[] = [];
    public creators: Creator[] = [];
    public stories: Story[] = [];
    public isRare: boolean;
}
