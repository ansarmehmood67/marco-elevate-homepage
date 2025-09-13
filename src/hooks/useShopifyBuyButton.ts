import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    ShopifyBuy: any;
  }
}

interface ShopifyConfig {
  domain: string;
  storefrontAccessToken: string;
}

interface UseShopifyBuyButtonProps {
  productId: string;
  config?: ShopifyConfig;
}

const defaultConfig: ShopifyConfig = {
  domain: 'sryeje-1e.myshopify.com',
  storefrontAccessToken: '7ff37b4fd58f5dbf7089e622d67835ed',
};

export const useShopifyBuyButton = ({ productId, config = defaultConfig }: UseShopifyBuyButtonProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const componentRef = useRef<any>(null);

  const loadShopifySDK = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (window.ShopifyBuy) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Failed to load Shopify SDK'));
      
      document.head.appendChild(script);
    });
  };

  const createBuyButton = async () => {
    if (!containerRef.current || !productId) return;

    try {
      await loadShopifySDK();

      const client = window.ShopifyBuy.buildClient({
        domain: config.domain,
        storefrontAccessToken: config.storefrontAccessToken,
      });

      window.ShopifyBuy.UI.onReady(client).then((ui: any) => {
        // Clear existing component
        if (componentRef.current) {
          componentRef.current.destroy();
        }

        // Clear container
        if (containerRef.current) {
          containerRef.current.innerHTML = '';
        }

        componentRef.current = ui.createComponent('product', {
          id: productId,
          node: containerRef.current,
          moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
          options: {
            product: {
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "calc(25% - 20px)",
                    "margin-left": "20px",
                    "margin-bottom": "50px"
                  }
                },
                button: {
                  ":hover": {
                    "background-color": "#2ec2e6"
                  },
                  "background-color": "#33d7ff",
                  ":focus": {
                    "background-color": "#2ec2e6"
                  },
                  "border-radius": "12px",
                  "font-weight": "bold",
                  "padding": "12px 24px"
                }
              },
              buttonDestination: "checkout",
              contents: {
                img: false,
                title: false,
                price: false
              },
              text: {
                button: "Prenota Ora"
              }
            },
            productSet: {
              styles: {
                products: {
                  "@media (min-width: 601px)": {
                    "margin-left": "-20px"
                  }
                }
              }
            },
            modalProduct: {
              contents: {
                img: false,
                imgWithCarousel: true,
                button: false,
                buttonWithQuantity: true
              },
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px"
                  }
                },
                button: {
                  ":hover": {
                    "background-color": "#2ec2e6"
                  },
                  "background-color": "#33d7ff",
                  ":focus": {
                    "background-color": "#2ec2e6"
                  }
                }
              },
              text: {
                button: "Add to cart"
              }
            },
            option: {},
            cart: {
              styles: {
                button: {
                  ":hover": {
                    "background-color": "#2ec2e6"
                  },
                  "background-color": "#33d7ff",
                  ":focus": {
                    "background-color": "#2ec2e6"
                  }
                }
              },
              text: {
                total: "Subtotal",
                button: "Checkout"
              }
            },
            toggle: {
              styles: {
                toggle: {
                  "background-color": "#33d7ff",
                  ":hover": {
                    "background-color": "#2ec2e6"
                  },
                  ":focus": {
                    "background-color": "#2ec2e6"
                  }
                }
              }
            }
          },
        });
      });
    } catch (error) {
      console.error('Error creating Shopify buy button:', error);
    }
  };

  useEffect(() => {
    return () => {
      if (componentRef.current) {
        componentRef.current.destroy();
      }
    };
  }, []);

  return {
    containerRef,
    createBuyButton
  };
};