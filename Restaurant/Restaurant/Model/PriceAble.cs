namespace Restaurant.Model
{
    public class PriceAble
    {
        public PriceAble(int price, Category category, string name, string description)
        {
            Price = price;
            Category = category;
            Name = name;
            Description = description;
        }

        public int Price { get; set; }
        public Category Category { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

    }
}
