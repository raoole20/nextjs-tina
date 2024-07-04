---
body:
  - basicEcomerFooter:
      footerType: Ecomer
      background:
        generals:
          color: 'rgba(35, 47, 62, 0.92)'
        childrenSnap:
          - cols:
              - 4
              - 6
            rows:
              - 1
              - 6
            tinaField: zes2mm---blank.body.0.basicEcomerFooter.background.childrenSnap
            gridId: 0
          - cols:
              - 6
              - 9
            rows:
              - 1
              - 6
            tinaField: zes2mm---blank.body.0.basicEcomerFooter.background.childrenSnap
            gridId: 1
          - cols:
              - 10
              - 12
            rows:
              - 1
              - 6
            tinaField: zes2mm---blank.body.0.basicEcomerFooter.background.childrenSnap
            gridId: 2
          - cols:
              - 12
              - 16
            rows:
              - 1
              - 6
            tinaField: zes2mm---blank.body.0.basicEcomerFooter.background.childrenSnap
            gridId: 3
          - cols:
              - 3
              - 17
            rows:
              - 6
              - 8
            tinaField: zes2mm---blank.body.0.basicEcomerFooter.background.childrenSnap
            gridId: 4
        bgcolor:
          color: 'rgb(53, 47, 56)'
      content: ''
    _template: footer
  - action_button:
      icon: AArrowUp
      button_color: 'rgb(98, 18, 138)'
      icon_color: 'rgba(255, 255, 255, 1)'
      button_animation: ''
    swiper_config:
      card_type: elevation
      card_corners: rounded-xl
      card_bg_color: 'rgb(251, 251, 251)'
      slidesPerViewDesktop: 5
      spaceBetween: 10
    _template: simple_carousel
headers:
  - background:
      generals:
        width: '100'
        heigth: '9'
      padding:
        paddingLeft: '120'
        paddingBottom: '19'
        paddingTop: '10'
        paddingRight: '120'
      bgcolor:
        color: 'rgba(85, 13, 120, 0.92)'
        bgimage:
          directory: ''
          type: file
          id: STELLAR ADS360-01.png
          filename: STELLAR ADS360-01.png
          src: /STELLAR ADS360-01.png
          thumbnails:
            75x75: /STELLAR ADS360-01.png
            400x400: /STELLAR ADS360-01.png
            1000x1000: /STELLAR ADS360-01.png
    logo: /logo_empresa_1.svg
    title: ''
    iconButtons:
      button_control:
        - icon: LucideCircleUserRound
          icon_color: 'rgb(245, 238, 238)'
          _template: button
        - icon: AlertOctagon
          icon_color: 'rgb(248, 248, 248)'
          _template: button
        - icon: LucideShoppingCart
          icon_color: 'rgb(255, 242, 255)'
          is_shop_cart: true
          _template: button
    _template: ecommerce_header
contenido:
  - title_carousel:
      text_color: '#2D343C'
      position: left
    price_carousel:
      text_color: '#2D343C'
      position: center
    category_carousel:
      text_color: '#BEC3C9'
      position: left
    divider_carousel:
      line_color: '#4A48A3'
      line_width: 100
    action_button:
      icon: ShoppingCart
      button_color: '#4A48A3'
      icon_color: '#fff'
      button_animation: ''
    swiper_config:
      card_type: ''
      card_corners: ''
      card_bg_color: '#fff'
      slidesPerViewDesktop: 5
    _template: simple_carousel
  - category: '123123123'
    pasillo:
      card:
        event: goToPage
        redirectTo: /blank/detalles
    _template: pasillo_productos
---

