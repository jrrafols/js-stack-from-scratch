import chai from 'chai';
import { stub } from 'sinon';
import sinonChai from 'sinon-chai';
import { describe, it } from 'mocha';
import Dog from '../../shared/dog';

chai.should();
chai.use(sinonChai);

describe('Shared', () => {
  describe('Dog', () => {
    describe('barkInConsole', () => {
      it('should print a bark string with its name', () => {
        stub(console, 'log');
        new Dog('Test Toby').barkInConsole();
        /* eslint-disable no-console */
        console.log.should.have.been.calledWith('Wah wah, I am Test Toby');
        console.log.restore();
        /* eslint-enable no-console */
      });
    });
    /*
    describe('setName', () => {
      it('should set the name to set the name to Test 1 then change to Test 2', () => {
        const dog = new Dog('Test 1');
        dog.name.should.equal('Test 1');
        dog.setName('Test 2');
        dog.name.should.equal('Test 2');
      });
    });*/
  });
});
