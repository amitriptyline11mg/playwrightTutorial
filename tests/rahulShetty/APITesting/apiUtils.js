module.exports = class apiUtils {

    constructor(apiContext, loginPayload){
        this.apiContext = apiContext;
        this.loginPayload = loginPayload;
    }

    async getToken() {
        const loginResponse = await this.apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login',
            { data: this.loginPayload })

        const myJson = await loginResponse.json();
        let token = await myJson.token;
        // console.log('Token in: ', token);
        return token;
    }

    async createOrder(orderPayload){

        const response = {}
        // Inserting a key val pair inside the empty obj above
        response.token = await this.getToken()  

            const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
                {
                    data: orderPayload,
                    headers:  {
                        'Authorization': response.token,
                        'Content-Type': 'application/json'
                    },
                }
            )
        
           const orderResponseJson = await orderResponse.json();
           console.log(orderResponseJson);
           const orderID = orderResponseJson.orders[0];
           // inserting this orderID in my response object too
           response.orderID = orderID;

           // will return thr response obj 
           return response;
           
           
    }

    
}

