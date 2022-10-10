export type Tweet = {
  tweet_id?: string
  text?: string
  created_at: string
  username: string
  avatar: string
  user_id: string
  medias: Array<{
    type: 'photo' | 'video' | 'animated_gif'
    url: string
    height: number
    width: number
    variants?: Array<Variant>
  }>
}

export type Variant = {
  bit_rate: number
  content_type: string
  url: string
}
