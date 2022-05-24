import './Style.scss';
import LogIn from '../../components/LogIn/LogIn';
import Video from '../../assets/videos/ComidaPasoAPaso.mp4'

function MenuWorld() {
    return (
        <>
            <main className='menuWorld'>
                <section className='d-flex justify-content-around align-items-center'>
                    <div className='sectionFragment'>
                        <div className='introduction'>
                            <h1 className='title'>Don't know what to cook?</h1>
                            <p className='text'>MenuWorld is your go-to site to discover a collection of new and amazing recipes for your family gatherings, to surprise your partner or to add to your restaurant menu.</p>
                        </div>
                    </div>
                    <div className='sectionFragment'>
                        <LogIn></LogIn>
                    </div>
                </section>
                <section className='d-flex justify-content-around align-items-center'>
                    <div className='sectionFragment'>
                        <div className='introductionImg'>
                        </div>
                    </div>
                    <div className='sectionFragment'>
                        <div className='introduction'>
                            <h1 className='title'>There are tons of recipes for you to discover!</h1>
                            <p className='text'>Learn how to cook typical multi-cultural dishes, from the most basic to the most complex ones.</p>
                        </div>
                    </div>
                </section>
                <section className='d-flex justify-content-around align-items-center'>
                    <div className='sectionFragment'>
                        <div className='introduction'>
                            <h1 className='title'>Learn how to cook at your own pace</h1>
                            <p className='text'>Step by step explained recipes with images and videos to guide you through.</p>
                        </div>
                    </div>
                    <div className='sectionFragment'>
                        <video src={Video} autoPlay muted loop className='introductionVideo'></video>
                    </div>
                </section>
                <section className='d-flex justify-content-around align-items-center'>
                    <div className='sectionFragment'>
                        <div className='introduction'>
                            <h1 className='title'>A world of culinary culture just a click away from you</h1>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default MenuWorld;