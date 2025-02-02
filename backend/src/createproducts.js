import dotenv from 'dotenv';
import Stripe from 'stripe';
dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// const products = [
//     {
//       "name": "Gigabyte H410M S2H V2",
//       "description": "Gigabyte H410M S2H V2",
//       "images": [
//         "https://thumb.pccomponentes.com/w-530-530/articles/39/399344/1470-gigabyte-h410m-s2h-v2.jpg"
//       ],
//       "metadata": {
//         "category": "motherboard"
//       },
//       "default_price_data": {
//         "currency": "eur",
//         "unit_amount": 4998
//       }
//     },
//     {
//       "name": "Gigabyte H510M S2H V2",
//       "description": "Gigabyte H510M S2H V2",
//       "images": [
//         "https://thumb.pccomponentes.com/w-530-530/articles/58/585335/1339-gigabyte-h510m-s2h-v2.jpg"
//       ],
//       "metadata": {
//         "category": "motherboard"
//       },
//       "default_price_data": {
//         "currency": "eur",
//         "unit_amount": 4999
//       }
//     },
//     {
//       "name": "Gigabyte A520M H",
//       "description": "Gigabyte A520M H",
//       "images": [
//         "https://thumb.pccomponentes.com/w-530-530/articles/31/314676/1479-gigabyte-a520m-h.jpg"
//       ],
//       "metadata": {
//         "category": "motherboard"
//       },
//       "default_price_data": {
//         "currency": "eur",
//         "unit_amount": 5499
//       }
//     },
//     {
//       "name": "Biostar A68N-2100K",
//       "description": "Biostar A68N-2100K",
//       "images": [
//         "https://thumb.pccomponentes.com/w-530-530/articles/1042/10422405/136-biostar-a68n-2100k.jpg"
//       ],
//       "metadata": {
//         "category": "motherboard"
//       },
//       "default_price_data": {
//         "currency": "eur",
//         "unit_amount": 5724
//       }
//     },
//     {
//       "name": "MSI A520M-A PRO",
//       "description": "MSI A520M-A PRO",
//       "images": [
//         "https://thumb.pccomponentes.com/w-530-530/articles/31/319059/1901-msi-a520m-a-pro.jpg"
//       ],
//       "metadata": {
//         "category": "motherboard"
//       },
//       "default_price_data": {
//         "currency": "eur",
//         "unit_amount": 5773
//       }
//     },
//     {
//       "name": "AsRock H470M-HDV/M.2",
//       "description": "AsRock H470M-HDV/M.2",
//       "images": [
//         "https://thumb.pccomponentes.com/w-530-530/articles/37/378494/1978-asrock-h470m-hdv-m2.jpg"
//       ],
//       "metadata": {
//         "category": "motherboard"
//       },
//       "default_price_data": {
//         "currency": "eur",
//         "unit_amount": 5899
//       }
//     },
//     {
//       "name": "Gigabyte A520M DS3H",
//       "description": "Gigabyte A520M DS3H",
//       "images": [
//         "https://thumb.pccomponentes.com/w-530-530/articles/31/314672/1999-a520m-ds3h.jpg"
//       ],
//       "metadata": {
//         "category": "motherboard"
//       },
//       "default_price_data": {
//         "currency": "eur",
//         "unit_amount": 5999
//       }
//     },
//     {
//       "name": "Asus PRIME H410M-A",
//       "description": "Asus PRIME H410M-A",
//       "images": [
//         "https://thumb.pccomponentes.com/w-530-530/articles/29/295059/asus-prime-h410m-a.jpg"
//       ],
//       "metadata": {
//         "category": "motherboard"
//       },
//       "default_price_data": {
//         "currency": "eur",
//         "unit_amount": 6000
//       }
//     },
//     {
//       "name": "MSI PRO H510M-B",
//       "description": "MSI PRO H510M-B",
//       "images": [
//         "https://thumb.pccomponentes.com/w-530-530/articles/1073/10734480/1751-msi-pro-h510m-b.jpg"
//       ],
//       "metadata": {
//         "category": "motherboard"
//       },
//       "default_price_data": {
//         "currency": "eur",
//         "unit_amount": 6098
//       }
//     },
//     {
//       "name": "Gigabyte A520M K V2",
//       "description": "Gigabyte A520M K V2",
//       "images": [
//         "https://thumb.pccomponentes.com/w-530-530/articles/1072/10726676/1200-gigabyte-a520m-k-v2.jpg"
//       ],
//       "metadata": {
//         "category": "motherboard"
//       },
//       "default_price_data": {
//         "currency": "eur",
//         "unit_amount": 6261
//       }
//     },
//     {
//       "name": "Gigabyte H410M H V2",
//       "description": "Gigabyte H410M H V2",
//       "images": [
//         "https://thumb.pccomponentes.com/w-530-530/articles/41/414950/1216-gigabyte-h410m-h-v2.jpg"
//       ],
//       "metadata": {
//         "category": "motherboard"
//       },
//       "default_price_data": {
//         "currency": "eur",
//         "unit_amount": 6299
//       }
//     },
//     {
//       "name": "Biostar H61MHV3",
//       "description": "Biostar H61MHV3",
//       "images": [
//         "https://thumb.pccomponentes.com/w-530-530/articles/1077/10777059/1573-biostar-h61mhv3.jpg"
//       ],
//       "metadata": {
//         "category": "motherboard"
//       },
//       "default_price_data": {
//         "currency": "eur",
//         "unit_amount": 6398
//       }
//     },
//     {
//       "name": "Gigabyte A520M S2H",
//       "description": "Gigabyte A520M S2H",
//       "images": [
//         "https://thumb.pccomponentes.com/w-530-530/articles/31/314673/1309-gigabyte-a520m-s2h.jpg"
//       ],
//       "metadata": {
//         "category": "motherboard"
//       },
//       "default_price_data": {
//         "currency": "eur",
//         "unit_amount": 6398
//       }
//     },
//     {
//       "name": "Asrock A520M-HVS",
//       "description": "Asrock A520M-HVS",
//       "images": [
//         "https://thumb.pccomponentes.com/w-530-530/articles/31/316643/1316-asrock-a520m-hvs.jpg"
//       ],
//       "metadata": {
//         "category": "motherboard"
//       },
//       "default_price_data": {
//         "currency": "eur",
//         "unit_amount": 6409
//       }
//     },
//     {
//       "name": "Asrock A520M-HDV",
//       "description": "Asrock A520M-HDV",
//       "images": [
//         "https://thumb.pccomponentes.com/w-530-530/articles/31/316645/1987-asrock-a520m-hdv.jpg"
//       ],
//       "metadata": {
//         "category": "motherboard"
//       },
//       "default_price_data": {
//         "currency": "eur",
//         "unit_amount": 6438
//       }
//     },
//     {
//       "name": "ASUS PRIME A520M-R",
//       "description": "ASUS PRIME A520M-R",
//       "images": [
//         "https://thumb.pccomponentes.com/w-530-530/articles/1083/10834736/1961-asus-prime-a520m-r.jpg"
//       ],
//       "metadata": {
//         "category": "motherboard"
//       },
//       "default_price_data": {
//         "currency": "eur",
//         "unit_amount": 6475
//       }
//     },
//     {
//       "name": "MSI A520M PRO",
//       "description": "MSI A520M PRO",
//       "images": [
//         "https://thumb.pccomponentes.com/w-530-530/articles/34/348570/1853-msi-a520m-pro.jpg"
//       ],
//       "metadata": {
//         "category": "motherboard"
//       },
//       "default_price_data": {
//         "currency": "eur",
//         "unit_amount": 6599
//       }
//     },
//     {
//       "name": "Asus Prime A520M-K",
//       "description": "Asus Prime A520M-K",
//       "images": [
//         "https://thumb.pccomponentes.com/w-530-530/articles/31/314430/1166-asus-prime-a520m-k.jpg"
//       ],
//       "metadata": {
//         "category": "motherboard"
//       },
//       "default_price_data": {
//         "currency": "eur",
//         "unit_amount": 6672
//       }
//     },
//     {
//       "name": "MSI PRO H610M-E DDR4",
//       "description": "MSI PRO H610M-E DDR4",
//       "images": [
//         "https://thumb.pccomponentes.com/w-530-530/articles/1067/10673951/1327-msi-pro-h610m-e-ddr4.jpg"
//       ],
//       "metadata": {
//         "category": "motherboard"
//       },
//       "default_price_data": {
//         "currency": "eur",
//         "unit_amount": 6695
//       }
//     },
//     {
//       "name": "Gigabyte H510M H V2",
//       "description": "Gigabyte H510M H V2",
//       "images": [
//         "https://thumb.pccomponentes.com/w-530-530/articles/1073/10738793/1866-gigabyte-h510m-h-v2.jpg"
//       ],
//       "metadata": {
//         "category": "motherboard"
//       },
//       "default_price_data": {
//         "currency": "eur",
//         "unit_amount": 6699
//       }
//     },
//     {
//       "name": "Gigabyte H410M H V2",
//       "description": "Gigabyte H410M H V2",
//       "images": [
//         "https://thumb.pccomponentes.com/w-530-530/articles/41/414950/1216-gigabyte-h410m-h-v2.jpg"
//       ],
//       "metadata": {
//         "category": "motherboard"
//       },
//       "default_price_data": {
//         "currency": "eur",
//         "unit_amount": 6299
//       }
//     },
//     {
//       "name": "Biostar H61MHV3",
//       "description": "Biostar H61MHV3",
//       "images": [
//         "https://thumb.pccomponentes.com/w-530-530/articles/1077/10777059/1573-biostar-h61mhv3.jpg"
//       ],
//       "metadata": {
//         "category": "motherboard"
//       },
//       "default_price_data": {
//         "currency": "eur",
//         "unit_amount": 6398
//       }
//     },
//     {
//       "name": "Gigabyte A520M S2H",
//       "description": "Gigabyte A520M S2H",
//       "images": [
//         "https://thumb.pccomponentes.com/w-530-530/articles/31/314673/1309-gigabyte-a520m-s2h.jpg"
//       ],
//       "metadata": {
//         "category": "motherboard"
//       },
//       "default_price_data": {
//         "currency": "eur",
//         "unit_amount": 6398
//       }
//     },
//     {
//       "name": "Asrock A520M-HVS",
//       "description": "Asrock A520M-HVS",
//       "images": [
//         "https://thumb.pccomponentes.com/w-530-530/articles/31/316643/1316-asrock-a520m-hvs.jpg"
//       ],
//       "metadata": {
//         "category": "motherboard"
//       },
//       "default_price_data": {
//         "currency": "eur",
//         "unit_amount": 6409
//       }
//     },
//     {
//       "name": "Asrock A520M-HDV",
//       "description": "Asrock A520M-HDV",
//       "images": [
//         "https://thumb.pccomponentes.com/w-530-530/articles/31/316645/1987-asrock-a520m-hdv.jpg"
//       ],
//       "metadata": {
//         "category": "motherboard"
//       },
//       "default_price_data": {
//         "currency": "eur",
//         "unit_amount": 6438
//       }
//     },
//     {
//       "name": "ASUS PRIME A520M-R",
//       "description": "ASUS PRIME A520M-R",
//       "images": [
//         "https://thumb.pccomponentes.com/w-530-530/articles/1083/10834736/1961-asus-prime-a520m-r.jpg"
//       ],
//       "metadata": {
//         "category": "motherboard"
//       },
//       "default_price_data": {
//         "currency": "eur",
//         "unit_amount": 6475
//       }
//     },
//     {
//       "name": "MSI A520M PRO",
//       "description": "MSI A520M PRO",
//       "images": [
//         "https://thumb.pccomponentes.com/w-530-530/articles/34/348570/1853-msi-a520m-pro.jpg"
//       ],
//       "metadata": {
//         "category": "motherboard"
//       },
//       "default_price_data": {
//         "currency": "eur",
//         "unit_amount": 6599
//       }
//     },
//     {
//       "name": "Asus Prime A520M-K",
//       "description": "Asus Prime A520M-K",
//       "images": [
//         "https://thumb.pccomponentes.com/w-530-530/articles/31/314430/1166-asus-prime-a520m-k.jpg"
//       ],
//       "metadata": {
//         "category": "motherboard"
//       },
//       "default_price_data": {
//         "currency": "eur",
//         "unit_amount": 6672
//       }
//     },
//     {
//       "name": "MSI PRO H610M-E DDR4",
//       "description": "MSI PRO H610M-E DDR4",
//       "images": [
//         "https://thumb.pccomponentes.com/w-530-530/articles/1067/10673951/1327-msi-pro-h610m-e-ddr4.jpg"
//       ],
//       "metadata": {
//         "category": "motherboard"
//       },
//       "default_price_data": {
//         "currency": "eur",
//         "unit_amount": 6695
//       }
//     },
//     {
//       "name": "Gigabyte H510M H V2",
//       "description": "Gigabyte H510M H V2",
//       "images": [
//         "https://thumb.pccomponentes.com/w-530-530/articles/1073/10738793/1866-gigabyte-h510m-h-v2.jpg"
//       ],
//       "metadata": {
//         "category": "motherboard"
//       },
//       "default_price_data": {
//         "currency": "eur",
//         "unit_amount": 6699
//       }
//     }
// ];
// const result = await Promise.all(
//     products.map(async (product) => {
//         return await stripe.products.create(product);
//     })
// );

// console.log(result);



// const pcCompToProduct = (pcCompProduct) => {
//     return {
//         name: pcCompProduct.name,
//         metadata: {
//             category: pcCompProduct.mainCategory.slug,
//         },
//         default_price_data: {
//             currency: 'eur',
//             unit_amount: pcCompProduct.price,
//         },
//         images: [pcCompProduct.images.large],
//     };
// };


const products = await stripe.products.list({limit: 100});
products.data.forEach(async (product) => {
    if (product.id === 'prod_Rh88S9PlM9i759') {
        await stripe.products.delete(product.id);
    }
})

