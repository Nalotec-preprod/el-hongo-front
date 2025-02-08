export type DishT = {
  name: string
  subtitle?: string
  description: string
  imageUrl?: string
  price: number
}

export type DishCategoryT = {
  category: string
  dishes: DishT[]
}

export type MenuT = {
  categoriesList: DishCategoryT[]
}
