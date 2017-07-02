import React from 'react';
import {
    Nav,
    Navbar,
    NavItem,
} from 'react-bootstrap'
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap'





export default class Navigation extends React.Component {
    render () {
        const user = undefined
        return(
            <Navbar fluid inverse>
                <Nav>
                    <IndexLinkContainer to="/">
                        <NavItem><img
                            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4OS41NzYgNDg5LjU3NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDg5LjU3NiA0ODkuNTc2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGcgaWQ9IlhNTElEXzMxMl8iPgoJPHBhdGggaWQ9IlhNTElEXzMxN18iIGQ9Ik0zMzAuOTczLDI1NS4yMDhjLTIyLjE4MS0zNC42MDYtNjAuNDU4LTU1LjUzOC0xMDEuNTU2LTU1LjUzOGMtNDEuMDkzLDAtNzkuMzcsMjAuOTMxLTEwMS41NSw1NS41MzggICBsLTYxLjA2Myw5NS4yNTVjLTE2LjcyMywyNi4wOTItMTQuMzg4LDYwLjA1OSw1LjczNyw4My42MTRjMjAuMTUxLDIzLjU1Niw1My4zNDMsMzEuMTQzLDgxLjcyOCwxOC42NjhsMC4wMTktMC4wMTcgICBjNDcuODc4LTIxLjA0NCwxMDIuMzg4LTIxLjA0NCwxNTAuMjgsMC4wMTdjMjguMzY4LDEyLjQ3NSw2MS41Niw0Ljg5Nyw4MS43MTMtMTguNjU5YzIwLjE0Mi0yMy41NTUsMjIuNDc3LTU3LjUzMSw1Ljc1NC04My42MjMgICBMMzMwLjk3MywyNTUuMjA4eiIgZmlsbD0iI2ZmN2QwMCIvPgoJPHBhdGggaWQ9IlhNTElEXzMxNl8iIGQ9Ik03OC42ODgsMjQ2LjAyM2MyOC4wNy0xMC43ODYsNDAuNTM3LTQ2LjI1NSwyNy44NTktNzkuMTg5Yy0xMi42ODYtMzIuOTI3LTQ1LjcxNy01MC44OS03My43NTYtNDAuMDg3ICAgQzQuNzQzLDEzNy41MzItNy43MDYsMTcyLjk5NCw0Ljk0OSwyMDUuOTM1QzE3LjY0MSwyMzguODUyLDUwLjY3NCwyNTYuODI0LDc4LjY4OCwyNDYuMDIzeiIgZmlsbD0iI2ZmN2QwMCIvPgoJPHBhdGggaWQ9IlhNTElEXzMxNV8iIGQ9Ik0xODguOTM2LDE4Ni4zODFjMzYuNTYzLDAsNjYuMjE1LTM0LjgxNSw2Ni4yMTUtNzcuNzQxYzAtNDIuOTQ0LTI5LjY1Mi03Ny43NTgtNjYuMjE1LTc3Ljc1OCAgIGMtMzYuNTUzLDAtNjYuMjA2LDM0LjgxMy02Ni4yMDYsNzcuNzU4QzEyMi43MywxNTEuNTY2LDE1Mi4zODMsMTg2LjM4MSwxODguOTM2LDE4Ni4zODF6IiBmaWxsPSIjZmY3ZDAwIi8+Cgk8cGF0aCBpZD0iWE1MSURfMzE0XyIgZD0iTTMxMi4zOTEsMjA5LjQ4OGMzNC42OTcsMTEuNTMsNzMuODIyLTEyLjE2Miw4Ny4zNjMtNTIuODk4YzEzLjU1LTQwLjc0Mi0zLjYyMS04My4xMzQtMzguMjk3LTk0LjY2MyAgIGMtMzQuNjk5LTExLjUyOS03My44MjMsMTIuMTYyLTg3LjM1NCw1Mi45MDVDMjYwLjU2MSwxNTUuNTc1LDI3Ny43MTUsMTk3Ljk1OSwzMTIuMzkxLDIwOS40ODh6IiBmaWxsPSIjZmY3ZDAwIi8+Cgk8cGF0aCBpZD0iWE1MSURfMzEzXyIgZD0iTTQ2OS42NTMsMTk3Ljc5OGMtMjQuMTgyLTE3Ljg2Ni02MC43ODQtOS4zNzctODEuNzg5LDE4Ljk5NmMtMjAuOTgsMjguMzgxLTE4LjQwNiw2NS44NzYsNS43MjksODMuNzQyICAgYzI0LjEyOCwxNy44NzYsNjAuNzczLDkuMzc5LDgxLjc5LTE4Ljk4OEM0OTYuMzYyLDI1My4xNjgsNDkzLjc4MSwyMTUuNjY2LDQ2OS42NTMsMTk3Ljc5OHoiIGZpbGw9IiNmZjdkMDAiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
                            alt="logo_koty" style={{width: 28, height: 28}}/></NavItem>
                    </IndexLinkContainer>
                    { user === undefined ?
                        <NavItem style={{color: 'white'}}>musisz sie zalogowac żeby korzystać z
                            wyszukiwarki</NavItem> : <LinkContainer to="/startSearch">
                            <NavItem>Szukaj produktów!</NavItem>
                        </LinkContainer>
                    }
                </Nav>
                <Nav pullRight>
                    { user === undefined ?
                        <LinkContainer to="/logIn">
                            <NavItem>Nie jesteś zalogowany</NavItem>
                        </LinkContainer> :
                        <NavItem style={{color: 'white'}}>Zalogowany jako: {user}</NavItem>
                    }
                </Nav>
            </Navbar>
        )
    }
}