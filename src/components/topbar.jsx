import MenuIcon from '@material-ui/icons/Menu';

export default function Topbar(){
    return (
        <nav class="lg:inline-flex lg:flex-row justify-between h-16 w-full bg-black text-gray-100 md:inline-flex md:flex-col sm:inline-flex sm:flex-col">
            <div class="p-5 pl-10 flex">
                <a class="pr-10">
                    Home
                </a>
                <a class="pr-10">
                    About
                </a>
                <a class="pr-10">
                    Skills
                </a>
            </div>
            <div class="p-5 ">
            <a class="p-5">
                Contact
            </a>
            <button class="lg:hidden md:hidden"><MenuIcon/></button>
            </div>
            
        </nav>
    );
}
