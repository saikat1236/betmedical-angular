export class Category {
    public id: number;
    public name: string;
    public slug: string;
    public child: Category[];
    public type?: string;
}
