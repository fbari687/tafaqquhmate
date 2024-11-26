import Nav from "@/Components/Nav";
import NavLink from "@/Components/NavLink";

const Navbar = () => {
    return (
        <Nav>
            <NavLink type={"link"} href={"/"} label={"Home"}></NavLink>
            <NavLink type={"link"} href={"/materi"} label={"Materi"}></NavLink>
            <NavLink type={"link"} href={"/kuis"} label={"Kuis"}></NavLink>
            <NavLink
                type={"link"}
                href={"/tentang"}
                label={"Tentang"}
            ></NavLink>
            {/* <NavLink type={"link"} href={"/kuis"} label={"Kuis"}></NavLink> */}
            {/* {!auth && (
                <NavLink
                    type={"button"}
                    href={"/login"}
                    label={"Log In"}
                ></NavLink>
            )} */}
        </Nav>
    );
};

export default Navbar;
