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
                  "background": "linear-gradient(135deg, hsl(202, 60%, 45%), hsl(202, 76%, 73%))",
                  ":hover": {
                    "background": "linear-gradient(135deg, hsl(202, 76%, 73%), hsl(202, 60%, 45%))",
                    "transform": "scale(1.02)",
                    "box-shadow": "0 20px 40px hsla(202, 60%, 45%, 0.4)"
                  },
                  ":focus": {
                    "background": "linear-gradient(135deg, hsl(202, 76%, 73%), hsl(202, 60%, 45%))"
                  },
                  "border-radius": "16px",
                  "font-weight": "bold",
                  "font-size": "16px",
                  "padding": "16px 32px",
                  "width": "100%",
                  "box-shadow": "0 10px 30px hsla(202, 60%, 45%, 0.3)",
                  "transition": "all 0.3s ease-in-out",
                  "border": "none",
                  "color": "white"
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
                  "background": "linear-gradient(135deg, hsl(202, 60%, 45%), hsl(202, 76%, 73%))",
                  ":hover": {
                    "background": "linear-gradient(135deg, hsl(202, 76%, 73%), hsl(202, 60%, 45%))",
                    "transform": "scale(1.02)"
                  },
                  ":focus": {
                    "background": "linear-gradient(135deg, hsl(202, 76%, 73%), hsl(202, 60%, 45%))"
                  },
                  "border-radius": "16px",
                  "font-weight": "bold",
                  "transition": "all 0.3s ease-in-out",
                  "color": "white"
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
                  "background": "linear-gradient(135deg, hsl(202, 60%, 45%), hsl(202, 76%, 73%))",
                  ":hover": {
                    "background": "linear-gradient(135deg, hsl(202, 76%, 73%), hsl(202, 60%, 45%))",
                    "transform": "scale(1.02)"
                  },
                  ":focus": {
                    "background": "linear-gradient(135deg, hsl(202, 76%, 73%), hsl(202, 60%, 45%))"
                  },
                  "border-radius": "16px",
                  "font-weight": "bold",
                  "transition": "all 0.3s ease-in-out",
                  "color": "white"
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
                  "background": "linear-gradient(135deg, hsl(202, 60%, 45%), hsl(202, 76%, 73%))",
                  ":hover": {
                    "background": "linear-gradient(135deg, hsl(202, 76%, 73%), hsl(202, 60%, 45%))",
                    "transform": "scale(1.02)"
                  },
                  ":focus": {
                    "background": "linear-gradient(135deg, hsl(202, 76%, 73%), hsl(202, 60%, 45%))"
                  },
                  "border-radius": "16px",
                  "transition": "all 0.3s ease-in-out",
                  "color": "white"
                }
              }
            }
          },
        });
      });
    } catch (error) {
      // Handle Shopify buy button creation error gracefully
      // Fallback behavior or error recovery could be implemented here
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