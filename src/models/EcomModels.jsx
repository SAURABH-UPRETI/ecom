const mongoose = require('mongoose');

const ecomSchema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  productColor: {
    type: Number,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productAvailability: {
    type: String,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },
  productQuantity: {
    type: Number,
    required: true,
    },
    productInSale: {
        type: String,
        required: true
    },
    productCategory: {
        type: String,
        required:true
    }
});

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required : true
    },
    userEmail: {
        type: String,
        required : true
    },
    userPhone: {
        type: Number,
        required : true
    },
    userAddress: {
        type: String,
        required : true
    },
    userPassword: {
        type: String,
        required : true
    },
    userConfirmPassword: {
        type: String,
        required : true
    }
})

const featureProductSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true,
      },
      productDescription: {
        type: String,
        required: true,
      },
      productColor: {
        type: Number,
        required: true,
      },
      productPrice: {
        type: Number,
        required: true,
      },
      productAvailability: {
        type: String,
        required: true,
      },
      productImage: {
        type: String,
        required: true,
      },
      productQuantity: {
        type: Number,
        required: true,
      },
      productInSale: {
          type: String,
          required: true
    },
    productCategory: {
        type: String,
        required:true
    }
})

const blogSchema = mongoose.Schema({
    blogTitle: {
        type: String,
        required:true
    },
    blogContent: {
        type: String,
        required:true
    },
    blogWriter: {
        type: String,
        required: true
    },
    blogImges: {
        type: String,
        required:true,
    }
})
const userReviewSchema = mongoose.Schema({
    review: {
        type: String,
        required:true
    },
    rating: {
        type: Number,
        required:true
    },
    
})

const ecomModel = mongoose.model('ecomProduct', ecomSchema);
const userModel = mongoose.model('userDetails', userSchema);
const featureProductModel = mongoose.model('featureProduct', featureProductSchema);
const blogModel = mongoose.model('blogSchema', blogSchema);
const reviewModel = mongoose.model('userRiview', userReviewSchema);
module.exports = ecomModel;
module.exports = userModel;
module.exports = featureProductModel;
module.exports = blogModel;
module.exports = reviewModel;