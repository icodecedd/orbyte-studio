import AnimatedContent from '@/blocks/Animations/AnimatedContent/AnimatedContent';
import { InfoTip } from '@/components/ui/toggle-tip';
import {
  Box,
  Button,
  Container,
  Field,
  Fieldset,
  Flex,
  Heading,
  Input,
  SimpleGrid,
  Textarea,
  RadioGroup,
} from '@chakra-ui/react';
import { toaster } from '@/components/ui/toaster';
import React, { useState } from 'react';
import api from '@/api/api';

const rolesAvailable = [
  'Production Coordinator',
  'Logistics Coordinator',
  'Content Head',
  'Social Media Coordinator',
  'Finance Assistant',
  'Design Assistant',
];

const Contact = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    link: '',
    role: '',
  });
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    message: false,
    link: false,
    role: false,
  });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Form submitted:', form);

    const newErrors = {
      firstName: !form.firstName,
      lastName: !form.lastName,
      email: !form.email || !validateEmail(form.email),
      message: !form.message,
      link: !form.link,
      role: !form.role,
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);

    if (!hasErrors) {
      const payload = {
        firstName: form?.firstName?.trim() || '',
        lastName: form?.lastName?.trim() || '',
        email: form?.email?.trim() || '',
        message: form?.message?.trim() || '',
        link: form?.link || '',
        role: form?.role || '',
      };

      try {
        await api.post('/api/contact/submit-application', payload);

        toaster.create({
          title: 'Form Submitted',
          description: 'Your submission has been sent successfully!',
          type: 'success',
          duration: 5000,
          isClosable: true,
        });

        setForm({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
          link: '',
          role: '',
        });
      } catch (error) {
        toaster.create({
          title: 'Submission Failed',
          description:
            'An error occurred while submitting the form. Please try again.',
          type: 'error',
          duration: 5000,
          isClosable: true,
        });
        console.error('Error submitting form:', error);
      }
    } else {
      toaster.create({
        title: 'Form Error',
        description: 'Please fill out all required fields correctly.',
        type: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container
      as='section'
      id='contact'
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
      {/* Header */}
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
            ReAch out to Mission contRol
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
            Ready to discuss your next multimedia project or explore joining our
            team?
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
            <Flex
              direction={{ base: 'column', md: 'row' }}
              gap={{ base: 4, md: 6 }}
            >
              {/* First Name */}
              <Field.Root
                w={{ base: '100%', md: '50%' }}
                invalid={errors.firstName}
              >
                <Field.Label color='white'>First name</Field.Label>
                <Input
                  placeholder='First name'
                  size='lg'
                  width='100%'
                  name='firstName'
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
                <Field.ErrorText>
                  {errors.firstName ? 'Please enter a first name' : ''}
                </Field.ErrorText>
              </Field.Root>
              {/* Last Name */}
              <Field.Root
                w={{ base: '100%', md: '50%' }}
                invalid={errors.lastName}
              >
                <Field.Label color='white'>Last name</Field.Label>
                <Input
                  placeholder='Last name'
                  size='lg'
                  width='100%'
                  name='lastName'
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
                <Field.ErrorText>
                  {errors.lastName ? 'Please enter a last name' : ''}
                </Field.ErrorText>
              </Field.Root>
            </Flex>

            {/* Email */}
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

            {/* Message */}
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

            {/* Resume Link */}
            <Field.Root mt={6} invalid={errors.link}>
              <Field.Label color='white'>
                Link
                <InfoTip content='Please include a public Google Drive or portfolio link to your CV/Resume' />
              </Field.Label>
              <Input
                placeholder='Link'
                size='lg'
                width='100%'
                name='link'
                value={form.link}
                onChange={handleChange}
                required
              />
              <Field.ErrorText>
                {errors.link ? 'Please enter a link' : ''}
              </Field.ErrorText>
            </Field.Root>

            {/* Role */}
            <Fieldset.Root mt={6} invalid={errors.role}>
              <Fieldset.Legend color='white'>Select your role</Fieldset.Legend>
              <RadioGroup.Root
                value={form.role}
                onValueChange={(e) =>
                  setForm((prev) => ({ ...prev, role: e.value }))
                }
              >
                <SimpleGrid
                  columns={{ base: 1, md: 2 }}
                  columnGap={{ base: 4, md: 6 }}
                  rowGap={{ base: 3, md: 4 }}
                >
                  {rolesAvailable.map((role, index) => (
                    <RadioGroup.Item
                      key={index}
                      value={role}
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
                      <RadioGroup.ItemText>{role}</RadioGroup.ItemText>
                    </RadioGroup.Item>
                  ))}
                </SimpleGrid>
              </RadioGroup.Root>
              <Fieldset.ErrorText>
                {errors.role ? 'Please select a role' : ''}
              </Fieldset.ErrorText>
            </Fieldset.Root>

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

export default Contact;
