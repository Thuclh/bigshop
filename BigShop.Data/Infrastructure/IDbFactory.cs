using System;

namespace BigShop.Data.Infrastructure
{
    public interface IDbFactory : IDisposable
    {
        BigShopDbContext Init();
    }
}