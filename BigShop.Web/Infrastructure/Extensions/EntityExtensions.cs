using BigShop.Model.Models;
using BigShop.Web.Models;

namespace BigShop.Web.Infrastructure.Extensions
{
    public static class EntityExtensions
    {
        public static void UpdatePostCategory(this PostCategory postCategory, PostCategoryViewModel postCategoryVM)
        {
            postCategory.ID = postCategoryVM.ID;

            postCategory.Name = postCategoryVM.Name;

            postCategory.Alias = postCategoryVM.Alias;

            postCategory.Description = postCategoryVM.Description;

            postCategory.ParentID = postCategoryVM.ParentID;

            postCategory.DisplayOrder = postCategoryVM.DisplayOrder;

            postCategory.Image = postCategoryVM.Image;

            postCategory.HomeFlag = postCategoryVM.HomeFlag;

            postCategory.CreatedDate = postCategoryVM.CreatedDate;

            postCategory.CreatedBy = postCategoryVM.CreatedBy;

            postCategory.UpdatedDate = postCategoryVM.UpdatedDate;

            postCategory.UpdatedBy = postCategoryVM.UpdatedBy;

            postCategory.MetaDescription = postCategoryVM.MetaDescription;

            postCategory.MetaKeyword = postCategoryVM.MetaKeyword;

            postCategory.Status = postCategoryVM.Status;
        }

        public static void UpdatePost(this Post post, PostViewModel postVM)
        {
            post.ID = postVM.ID;

            post.Name = postVM.Name;

            post.Alias = postVM.Alias;

            post.CategoryID = postVM.CategoryID;

            post.Image = postVM.Image;

            post.Description = postVM.Description;

            post.Content = postVM.Content;

            post.HomeFlag = postVM.HomeFlag;

            post.HotFlag = postVM.HotFlag;

            post.ViewCount = postVM.ViewCount;

            post.CreatedBy = postVM.CreatedBy;

            post.CreatedDate = postVM.CreatedDate;

            post.UpdatedBy = postVM.UpdatedBy;

            post.UpdatedDate = postVM.UpdatedDate;

            post.MetaDescription = postVM.MetaDescription;

            post.MetaKeyword = postVM.MetaKeyword;

            post.Status = postVM.Status;
        }

        public static void UpdatePostTag(this PostTag postTag, PostTagViewModel postTagVM)
        {
            postTag.PostID = postTagVM.PostID;
            postTag.TagID = postTagVM.TagID;
        }

        public static void UpdateTag(this Tag tag, TagViewModel tagVM)
        {
            tag.ID = tagVM.ID;
            tag.Name = tagVM.Name;
            tag.Type = tagVM.Type;
        }

        public static void UpdateProductCategory(this ProductCategory productCategory,ProductCategoryViewModel productCategoryVM)
        {
            productCategory.ID = productCategoryVM.ID;
            productCategory.Name = productCategoryVM.Name;
            productCategory.Alias = productCategoryVM.Alias;
            productCategory.Description = productCategoryVM.Description;
            productCategory.ParentID = productCategoryVM.ParentID;
            productCategory.Image = productCategoryVM.Image;
            productCategory.DisplayOrder = productCategoryVM.DisplayOrder;
            productCategory.HomeFlag = productCategoryVM.HomeFlag;
            productCategory.CreatedBy = productCategoryVM.CreatedBy;
            productCategory.CreatedDate = productCategoryVM.CreatedDate;
            productCategory.UpdatedBy = productCategoryVM.UpdatedBy;
            productCategory.UpdatedDate = productCategoryVM.UpdatedDate;
            productCategory.MetaDescription = productCategoryVM.MetaDescription;
            productCategory.MetaKeyword = productCategoryVM.MetaKeyword;
            productCategory.Status = productCategoryVM.Status;
        }

        public static void UpdateProduct(this Product product, ProductViewModel productVM)
        {
            product.ID = productVM.ID;
            product.Name = productVM.Name;
            product.Alias = productVM.Alias;
            product.CategoryID = productVM.CategoryID;
            product.Image = productVM.Image;
            product.MoreImages = productVM.MoreImages;
            product.Price = productVM.Price;
            product.PromotionPrice = productVM.PromotionPrice;
            product.Warranty = productVM.Warranty;
            product.Description = productVM.Description;
            product.HomeFlag = productVM.HomeFlag;
            product.Content = productVM.Content;
            product.HotFlag = productVM.HotFlag;
            product.ViewCount = productVM.ViewCount;
            product.CreatedBy = productVM.CreatedBy;
            product.CreatedDate = productVM.CreatedDate;
            product.UpdatedBy = productVM.UpdatedBy;
            product.UpdatedDate = productVM.UpdatedDate;
            product.MetaDescription = productVM.MetaDescription;
            product.MetaKeyword = productVM.MetaKeyword;
            product.Status = productVM.Status;
            product.Tags = productVM.Tags;
            product.Quantity = productVM.Quantity;
        }

        public static void UpdateProductTag(this ProductTag productTag,ProductTagViewModel productTagVM)
        {
            productTag.ProductID = productTagVM.ProductID;
            productTag.TagID = productTagVM.TagID;
        }
    }
}