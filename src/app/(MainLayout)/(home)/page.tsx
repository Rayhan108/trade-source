import Banner from '@/Component/Home/Banner';
import ConstractorNear from '@/Component/Home/ConstractorNear';
import ProjectsNear from '@/Component/Home/ProjectsNear';
import RecentArticle from '@/Component/Home/RecentArticle';

const LandingPage = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(search);
  // console.log("search---->",search);
  // Handle the debounce for search term input
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchTerm(search);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [search]);
  return (
    <div>
      <Banner setSearch={setSearch} />
      <ProjectsNear debouncedSearchTerm={debouncedSearchTerm} />

      {/* <HomeProject /> */}
      <ConstractorNear />
      <RecentArticle />
    </div>
  );
};

export default LandingPage;
