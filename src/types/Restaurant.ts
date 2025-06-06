// src/types/Restaurant.ts
export interface MenuItem {
  name: string;
  price: number;
}

export interface Restaurant {
  name: string;
  address: string;
  type: string;
  photo: string;
  menu: {
    appetizers: MenuItem[];
    mainCourses: MenuItem[];
    desserts: MenuItem[];
    drinks: MenuItem[];
  };
}
