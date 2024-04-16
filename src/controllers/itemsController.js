const fetch = require('node-fetch');

async function searchItems(req, res) {    
    const query = require('url').parse(req.url,true).query.q;
    const url = `${process.env.URL_ITEMS}?q=:${query}`;
    console.log(url);
    try {
        if (!query) {
            res.status(400).send({success: false, message: "Query can not be empty"});
        }

        const data = await fetch(url);

        if (!data) {
            res.status(200).send({success: false, message: "Items not found with query " + query});
        } else {

            console.log(data);
            /*
            let info = {};

            let products = [];

            console.log(JSON.parse(data.data));

            data.data.result.forEach(product => {
                const x = {};
                x = { ...x, 
                    id: product.id,
                    title: product.title,
                    price: { currency: product.currency_id, amount: product.price, decimals: 0},
                    picture: product.thumbnail,
                    condition: product.condition,
                    free_shipping: product.shipping.free_shipping
                };
                products.push(x);                
            });

            info = { ...info, 
                author: { firsname: 'Juan Carlos', lastname: 'Salazar'},
                categories: ['no', 'se', 'encuentra', 'en', 'el', 'endpoint'],
                items: products
            }
*/
            res.status(200).send({success: true, data: await data.json()});
        }
    } catch (error) {
        res.status(500).send({success: false, message: error.message});
    }
}

async function searchItem(req, res) {
    const {itemId} = req.params;
    const url = `${process.env.URL_ITEM}/​${itemId}/description`;
    console.log(url);
    try {
        if (!itemId) {
            res.status(400).send({success: false, message: "Id can not be empty"});
        }

        //const item = await fetch(url);
        const item = await fetch(`${url}/description`);

        if (!item) {
            res.status(200).send({success: false, message: "Item not found with id " + itemId});
        } else {
            res.status(200).send({success: true, data: await item.json()});
        }
    } catch (error) {
        res.status(500).send({success: false, message: error.message});
    }
}

module.exports = {
    searchItems,
    searchItem
};
