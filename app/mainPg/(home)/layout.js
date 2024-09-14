import SessionWrapper from "@/Components/SessionWrapper";
import MyContext from "@/Components/Mycontext";
import styles from "@/app/mainPg/(home)/mainPg.module.css"
import HomeNav from "@/Components/homePg-components/HomeNav";
import SideBar from "@/Components/homePg-components/SideBar";
import RecentActivity from "@/Components/homePg-components/RecentActivity";
import DataFetcher from "@/Components/homePg-components/DataFetcher";
export const metadata = {
    title: "CollabIQ",
    description: "A platform for collaborative learning and peer interaction.",
};

export default function RootLayout({ children }) {
    return (
        <SessionWrapper>
            <MyContext>
                <DataFetcher/>
                <HomeNav />
                <main className={styles.main}>
                    <section className='grow'>
                        <RecentActivity />
                        {children}
                    </section>
                    <SideBar />
                </main>
            </MyContext>
        </SessionWrapper>
    );
}

