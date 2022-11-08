import React, { Dispatch } from "react"
import { Grid, GridItem, GridItemProps } from "shared/components"
import { AppNav } from "./app-nav"
import { AppMenu } from "./app-menu"

type LayoutState = {
  hideNav?: boolean
  hideMenu?: boolean
}

type LayoutContextState = [state: LayoutState, setState: Dispatch<LayoutState>]

const LayoutContext = React.createContext<LayoutContextState>([
  { hideNav: false, hideMenu: false },
  s => ({ ...s }),
])

export function Layout({ children }: React.PropsWithChildren<{}>) {
  const layoutContext = React.useReducer(
    (state: LayoutState, payload: { [k in keyof LayoutState]: boolean }) => {
      return { ...state, ...payload }
    },
    { hideNav: false, hideMenu: false },
  )
  const { hideNav, hideMenu } = layoutContext[0]

  return (
    <LayoutContext.Provider value={layoutContext}>
      <Grid
        data-testid="layout-grid"
        templateRows={{
          base: `auto 1fr auto`,
          md: `auto 1fr auto`,
        }}
        templateColumns={{ base: `1fr`, md: `224px 1fr` }}
        templateAreas={{
          base: `'nav' 'main' 'menu'`,
          md: `'menu nav' 'menu main' 'menu main'`,
        }}
        overflow="hidden"
        height="100%"
      >
        {!hideNav && (
          <GridItem gridArea="nav" overflow="hidden">
            <AppNav />
          </GridItem>
        )}
        {children}
        {!hideMenu && (
          <GridItem gridArea="menu">
            <AppMenu />
          </GridItem>
        )}
      </Grid>
    </LayoutContext.Provider>
  )
}

Layout.Main = makeLayoutGridItem({ gridArea: "main", overflow: "auto" })
Layout.Menu = makeLayoutGridItem({ gridArea: "menu" })
Layout.Nav = makeLayoutGridItem({
  gridArea: "nav",
  shadow: "md",
  p: 2,
  display: "flex",
  alignItems: "center",
})

function makeLayoutGridItem(defaultGridItemProps: GridItemProps) {
  return function ({ children, ...props }: GridItemProps) {
    return typeof children === "function" ? (
      children({ gridItemprops: defaultGridItemProps })
    ) : (
      <GridItem {...defaultGridItemProps} {...props}>
        {children}
      </GridItem>
    )
  }
}

export function useLayoutContext() {
  return React.useContext(LayoutContext)
}
