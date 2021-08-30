import React, {useContext} from 'react';
import Link from 'next/link';
import { CURRENCY } from '../../../Config';
import { useQuery } from '@apollo/react-hooks';
import { GET_NEAREST_POST } from 'core/graphql/NearestPost.query';
import { LOCATION_POST_PAGE, SINGLE_POST_PAGE } from 'core/navigation/constant';
import { PostLoader } from '../../../components/Placeholder';
import ListGrid from 'reusecore/src/elements/ListGrid';
import Box from 'reusecore/src/elements/Box';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import PostCard from '../../../components/PostCard';
import NoItemFound from '../../../components/NoItemFound';
import OnError from '../../../components/OnError';
import { LocationContext } from '../../../contexts/HomepageContext';
import { GET_POST_BY_LOCATION } from '../../../../core/graphql/Post.query';

const PostByLocation = ({getLocation}) => {
    const {location} = useContext(LocationContext)
  // QUERY SECTION  
  console.log(location)
  const QUERY_VARIABLES = {
    page: 1,
    LIMIT: 12,
    location,
  };
  const { data, loading, error } = useQuery(GET_POST_BY_LOCATION, {
    variables: QUERY_VARIABLES,
  });


  // Error Rendering.
  if (error) return <OnError />;
  // Extract Post Data
  const locationPost = data && data.nearest ? data.nearest.data : [];

  // Post Loop Control Area
  const renderNearestPost = item => {
    const {
      price,
      image: { url, largeUrl },
      title,
      slug,
    } = item;
    return (
      <Link
        href={`${SINGLE_POST_PAGE}/[slug]`}
        as={`${SINGLE_POST_PAGE}/${slug}`}
      >
        <a>
          <PostCard
            currency={CURRENCY}
            title={title}
            price={price}
            imageSrc={[url, largeUrl]}
          />
        </a>
      </Link>
    );
  };

  return (
    <>
      <Box flexBox justifyContent="space-between" alignItems="center">
        <Heading content={`Products in ${location}`} mb={0} fontSize={20} fontWeight={600} />
        <Link href={LOCATION_POST_PAGE}>
          <a>
            <Button
              title="See all"
              color="#8c8c8c"
              fontWeight={500}
              variant="textButton"
            />
          </a>
        </Link>
      </Box>
      <Box mt={20}>
        {!locationPost ? (
          <NoItemFound />
        ) : (
          <ListGrid
            data={locationPost}
            columnWidth={[1, 1 / 2, 1 / 3, 1 / 4]}
            limit={QUERY_VARIABLES.LIMIT}
            component={renderNearestPost}
            loading={loading}
            placeholder={<PostLoader />}
          />
        )}
      </Box>
    </>
  );
};

export default PostByLocation;
