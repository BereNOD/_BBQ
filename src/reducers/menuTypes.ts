export interface IBisnessMenu {
  "image": {
    "src": string,
    "alt": string,
    "width": number,
    "height": number
  },
  "title": string,
  "description": string,
  "periods": [
    {
      "period": string,
      "price": number
    },
    {
      "period": string,
      "price": number
    },
    {
      "period": string,
      "price": number
    }
  ]
}