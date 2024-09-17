import SessionWrapper from "@/Components/SessionWrapper";
import MyContext from "@/Components/Mycontext";
import SettingNav from "@/Components/homePg-components/setting-component/SettingNav"
export const metadata = {
    title: "CollabIQ",
    description: "A platform for collaborative learning and peer interaction.",
};

export default function RootLayout({ children }) {
    return (
        <SessionWrapper>
            <MyContext>
                <main className='w-full h-full flex p-1 border-2'>
                  <SettingNav/>
                    {children}
                </main>
            </MyContext>
        </SessionWrapper>
    );
}

