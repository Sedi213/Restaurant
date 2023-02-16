using Microsoft.AspNetCore.Mvc;
using Restaurant.Model;

namespace Restaurant.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OrderController : ControllerBase
    {


        [HttpGet]
        public IEnumerable<PriceAble> GetCurenntPrice()
        {
         
            return Demonstation.demonstations;
        }

        [HttpPost]
        public int GetPayment(IEnumerable<PriceAble> list)
        {
            return list.Sum(p => p.Price);
        }
    }
}