import AnimatedContent from '@/blocks/Animations/AnimatedContent/AnimatedContent';
import {
  Box,
  Button,
  Container,
  Field,
  Fieldset,
  Flex,
  Heading,
  Input,
  RadioGroup,
  SimpleGrid,
  Textarea,
} from '@chakra-ui/react';
import { useState } from 'react';

const ratings = ['Excellent', 'Good', 'Average', 'Bad', 'Terrible'];

const Feedback = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    rating: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
    rating: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', e.target.value);
  };

  return (
    <Container
      as='section'
      id='feedback'
      minH='100vh'
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      py={{ base: 16, md: 0 }}
      position='relative'
      overflow='hidden'
      maxW={{ base: '100%', md: 'container.lg', lg: 'container.xl' }}
      px={{ base: 4, md: 8 }}
      mt={{ base: 0, md: 16 }}
      mb={{ base: 8, md: 32 }}
    >
      <AnimatedContent
        distance={100}
        direction='vertical'
        reverse={true}
        duration={0.8}
        ease='power3.out'
        animateOpacity
        scale={1}
        threshold={0.1}
      >
        <Flex
          flexDirection='column'
          alignItems='center'
          justifyContent={{ base: 'center', md: 'space-between' }}
          gap={{ base: 2, md: 4 }}
        >
          <Heading
            fontSize={{ base: 'xl', md: '2xl' }}
            fontWeight='bold'
            color='white'
            textAlign={{ base: 'center', md: 'left' }}
            className='major-mono-display-regular'
          >
            sHARe youR cosMic insiGHts
          </Heading>
          <Heading
            fontSize={{ base: '2xl', md: '5xl' }}
            color='white'
            className='bebas-neue-regular'
            textAlign='center'
            maxW={{ base: '100%', md: '60%' }}
            lineHeight={1}
            mb={{ base: 2, md: 4 }}
          >
            Ready to help shape the future of Orbyte Studio? Fill out our
            feedback form and let us know what's on your mind.
          </Heading>
        </Flex>
      </AnimatedContent>

      {/* Form */}
      <Box w={{ base: '100%', md: '80%', lg: '70%' }} maxW='800px' mt={8}>
        <AnimatedContent
          distance={100}
          direction='vertical'
          reverse={false}
          duration={0.8}
          ease='power3.out'
          animateOpacity
          scale={1}
          threshold={0.1}
        >
          <form onSubmit={handleSubmit}>
            {/* Ratings */}
            <Fieldset.Root invalid={errors.rating}>
              <Fieldset.Legend color='white'>
                Share your experience
              </Fieldset.Legend>
              <RadioGroup.Root
                value={form.rating}
                onValueChange={(e) =>
                  setForm((prev) => ({ ...prev, rating: e.value }))
                }
              >
                <SimpleGrid
                  columns={{ base: 1, md: 2 }}
                  columnGap={{ base: 4, md: 6 }}
                  rowGap={{ base: 3, md: 4 }}
                >
                  {ratings.map((rating, index) => (
                    <RadioGroup.Item
                      key={index}
                      value={rating}
                      cursor='pointer'
                      px={4}
                      py={3}
                      borderWidth='1px'
                      borderRadius='md'
                      _hover={{ borderColor: 'gray.400' }}
                      display='flex'
                      alignItems='center'
                      gap={2}
                    >
                      <RadioGroup.ItemHiddenInput />
                      <RadioGroup.ItemIndicator />
                      <RadioGroup.ItemText>{rating}</RadioGroup.ItemText>
                    </RadioGroup.Item>
                  ))}
                </SimpleGrid>
              </RadioGroup.Root>
              <Fieldset.ErrorText>
                {errors.rating ? 'Please select a rating' : ''}
              </Fieldset.ErrorText>
            </Fieldset.Root>

            {/* Name */}
            <Field.Root mt={6} invalid={errors.name}>
              <Field.Label color='white'>Name</Field.Label>
              <Input
                placeholder='John Doe'
                size='lg'
                width='100%'
                name='name'
                type='name'
                value={form.name}
                onChange={handleChange}
                required
              />
              <Field.ErrorText>
                {errors.name ? 'Please enter a valid name' : ''}
              </Field.ErrorText>
            </Field.Root>

            <Field.Root mt={6} invalid={errors.email}>
              <Field.Label color='white'>Email</Field.Label>
              <Input
                placeholder='me@example.com'
                size='lg'
                width='100%'
                name='email'
                type='email'
                value={form.email}
                onChange={handleChange}
                required
              />
              <Field.ErrorText>
                {errors.email ? 'Please enter a valid email' : ''}
              </Field.ErrorText>
            </Field.Root>

            <Field.Root mt={6} invalid={errors.message}>
              <Field.Label color='white'>Message</Field.Label>
              <Textarea
                placeholder='Your message'
                size='lg'
                h='100px'
                width='100%'
                name='message'
                value={form.message}
                onChange={handleChange}
                required
              />
              <Field.ErrorText>
                {errors.message ? 'Please enter a message' : ''}
              </Field.ErrorText>
            </Field.Root>

            <Button
              variant='solid'
              size='md'
              mt={6}
              width='100%'
              type='submit'
              bg='white'
              color='black'
              border='1px solid'
              borderColor='gray.300'
              _hover={{
                bg: 'gray.100',
                transform: 'translateY(-3px)',
                boxShadow: 'lg',
              }}
            >
              Submit
            </Button>
          </form>
        </AnimatedContent>
      </Box>
    </Container>
  );
};

export default Feedback;
