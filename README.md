
# Task



Let’s assume we have a payment sub-system. This system is supposed to check whether the given validated invoice can get a discount or not. In this test we need an endpoint as follows: Input: product code or product name, the user's ID and the invoice final amount. Response: If it includes the discount, the discount percentage that can be considered for the given invoice. Product structure is a graph: 

1. A product can have a category as a parent. 
2. Every category can have a parent category. Applying the discount: If the product has a discount this discount has a priority and will be returned. Otherwise, we move to its parent category (if it exists) and check if it has a discount and so on until the product-category chain is done. If no discount was found the API should return -1. For simplicity, you can only consider 2 layers of this structure and we have one product from one category, which is this category is another subset of categories. But you’re more than welcome to show your talent :)

## Authorization



```http
POST https://sup-pays.herokuapp.com/api/getdiscount
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `code` | `string` | **Required**. Your Product Code |
| `amount` | `number ` | **NotRequired**. Your invoice total |
| `userId` | `number` | **Required**. Your userID (any) |

A simple request Body

```javascript
{
	"code": "ww",
	"amount": 1000000,
	"userId": 1223
}
```


## Responses

The API validates if the provided Product code has a discount attached to it or its category. it further calculates the discount and returns the discount amount from the invoice, else if there is no discount attached to the product it returns -1:

Sample response

```javascript
{
    "discount": "25",
    "discountPrice": 250000
}
```



## Testing

The folowing products has been hard coded on the  API:

```javascript

products = [{
    id: "1",
    name: "T Shirt",
    code: "ww",
    discount: null,
    category: {
      name: "Cloth",
      discount: 25
    }
  }, {
    id: "2",
    name: "Kaftan",
    code: "gg",
    discount: 5,
    category: {
      name: "Cloth",
      discount: null
    }
  }]
```

