declare module 'valine' {
  export interface ValineOptions {
    el: string
    appId: string
    appKey: string
    placeholder?: string
    path?: string
    avatar?: '' | 'mp' | 'identicon' | 'monsterid' | 'wavatar' | 'retro' | 'robohash' | 'hide'
    meta?: ('nick' | 'mail' | 'link')[]
    pageSize?: number
    lang?: string
    visitor?: boolean
    highlight?: boolean
    avatarForce?: boolean
    recordIP?: boolean
    serverURLs?: string
    emojiCDN?: string
    emojiMaps?: object
    enableQQ?: boolean
    requiredFields?: ('nick' | 'mail' | 'link')[]
  }
  class Valine {
    constructor(options?: ValineOptions) {}
    init(options: ValineOptions)
  }
  export = Valine
}
