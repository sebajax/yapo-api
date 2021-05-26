// Module Imports
import chai, { expect } from 'chai';
import makeGetAssignedWareclouds from '../../services/clouderPickups/getAssignedWareclouds';
import { getAssignedWarecloudsSchema } from '../../schemas/clouderPickups/clouderPickups.schema';
import Messages from '../../config/messages/service.messages';

chai.expect();

// TEST #getAssignedWareclouds()
describe('#getAssignedWareclouds()', () => {
  // Faker logger
  const Logger = {
    info: (loggerInfo) => {
      return loggerInfo;
    },
  };
  // Faker model
  const Warecloud = {
    getByClouderPickupId: ({ idClouderPickup }) => {
      const dbClouderPickup = 'testclouderp';
      if (idClouderPickup === dbClouderPickup) {
        return [
          {
            id_warecloud: 'warecloud1',
            warecloud_name: 'warecloud_test_1',
            first_name: 'warecloud_manager_FN_1',
            last_name: 'warecloud_manager_LN_1',
            email: 'warecloud1@test.com',
            phone: '123test',
            address: 'Test Av 123',
            city: {
              id_city: 1,
              city_name: 'Test City',
            },
          },
          {
            id_warecloud: 'warecloud2',
            warecloud_name: 'warecloud_test_2',
            first_name: 'warecloud_manager_FN_2',
            last_name: 'warecloud_manager_LN_2',
            email: 'warecloud2@test.com',
            phone: '123test',
            address: 'Test Av 123',
            city: {
              id_city: 1,
              city_name: 'Test City',
            },
          },
        ];
      }
      return [];
    },
  };

  it('It should pass and return all the wareclouds related to a clouder pickup', async () => {
    const getAssignedWareclouds = makeGetAssignedWareclouds({
      Warecloud,
      getAssignedWarecloudsSchema,
      Messages,
    });
    const idClouderPickup = 'testclouderp';
    const wareclouds = await getAssignedWareclouds({ idClouderPickup, Logger });
    expect(wareclouds).to.be.a('object');
    expect(wareclouds).to.have.property('error');
    expect(wareclouds).to.have.property('data');
    expect(wareclouds.error).to.eql(false);
    expect(wareclouds.data).to.be.a('array');
    expect(wareclouds.data[0]).to.be.a('object');
    expect(wareclouds.data[1]).to.be.a('object');
    expect(wareclouds.data[0]).to.have.property('id_warecloud');
    expect(wareclouds.data[1]).to.have.property('id_warecloud');
    expect(wareclouds.data[0].id_warecloud).to.eql('warecloud1');
    expect(wareclouds.data[1].id_warecloud).to.eql('warecloud2');
  });

  it('It should not return any warecloud', async () => {
    const getAssignedWareclouds = makeGetAssignedWareclouds({
      Warecloud,
      getAssignedWarecloudsSchema,
      Messages,
    });
    const idClouderPickup = 'testclouderp2';
    const wareclouds = await getAssignedWareclouds({ idClouderPickup, Logger });
    expect(wareclouds).to.be.a('object');
    expect(wareclouds).to.have.property('error');
    expect(wareclouds).to.have.property('data');
    expect(wareclouds.error).to.eql(false);
    expect(wareclouds.data).to.be.a('array');
    expect(wareclouds.data.length).to.eql(0);
  });
});
