namespace Restaurant.Model
{
    public class Demonstation //simulates complex logic
    {
       public static List<PriceAble> demonstations = new List<PriceAble>
        {
            new PriceAble(1,Category.Burger,"Cheeseburger","Burger with extra cheese"),
            new PriceAble(2,Category.Burger,"Gamburger","Burger with extra meat"),
            new PriceAble(3,Category.Burger,"Big Burger","Burger extra size"),

            new PriceAble(4,Category.Salad, "Olivle","1"),
            new PriceAble(5, Category.Salad, "Salad2", "2"),
            new PriceAble(6, Category.Salad, "Salad3", "3"),

            new PriceAble(7, Category.Drink, "Water", "Just water"),
            new PriceAble(8, Category.Drink, "Grean Tea", "Green Tea"),
            new PriceAble(9, Category.Drink, "Black Tea", "Black Tea"),
        };
    }
}
